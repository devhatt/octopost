# DevHat JavaScript/React Style Guide() {

Reference Style Guide

  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb](https://github.com/airbnb/javascript/tree/master)

## Sumário:

1.  [Regras básicas](#regras-basicas)
2.  [Estrutura de componentes](#estrutura-de-componentes)
3.  [Criando componentes](#criando-componentes)
4.  [Exportando arquivos](#exportando-arquivos)
5.  [Custom hooks](#custom-hooks)
6.  [Arquivos em PascalCase](#arquivos-em-pascalcase)
7.  [Nomeando coisas](#nomeando-coisas)
8.  [Class Component](#class-component)
9.  [Estilizando componentes](#estilizando-componentes)
10. [Tipando componentes](#tipando-componentes)
11. [Testes unitários](#testes-unitários)
12. [Alt em imagens](#alt-em-imagens)
13. [Estruturas de pastas](#estrutura-de-pastas)

<a name="regras-basicas"></a>
<a name="estrutura-de-componentes"></a>
<a name="criando-componentes"></a>
<a name="exportando-arquivos"></a>
<a name="custom-hooks"></a>
<a name="arquivos-em-pascalcase"></a>
<a name="nomeando-coisa"></a>
<a name="class-component"></a>
<a name="estilizando-componentes"></a>
<a name="tipando-componentes"></a>
<a name="testes-unitários"></a>
<a name="alt-em-images"></a>
<a name="estrutura-de-pastas"></a>


## Regras básicas

- Um componente por arquivo
- Evite ao máximo o uso de `any` nas tipagens
- Componentes unicamente em TSX
- Código apenas em inglês
> `Por que? Por mais que todos os contribuídores sejam brasileiros é importante padronizarmos todo o código em inglês para evitar uma mistura de inglês e português, algo do tipo "setNome()", um dos principais motivos também é a acessibilidade, muitas ferramentas de tradução automática e leitores de tela são mais eficazes quando lidam com texto em inglês.` 

## Estrutura de componentes

- Separe a pasta do seu componente em 4 arquivos
	- Componente.tsx (seu componente em si)
	- Componente.spec.tsx (testes do componente)
	- Componente.module.scss (seus estilos)
	- Componente.types.ts (interfaces e types do componente)

```
├─ components
│  ├─ MyComponent.module.scss
│  └─ MyComponent.spec.tsx
│  └─ MyComponent.tsx
|  └─ MyComponent.types.ts
```

## Criando componentes

- Todos os componentes serão criados em **`funções normais`**, `arrow functions`  **apenas** dentro dos componentes

```
// bom 
function Component(props: IProps) {
	const handleSomething = () => {
		// ...
	}

	return (
		// ...
	)
}

// PESSIMO
const Component = (props: IProps) => {
	const handleSomething = () => {
		// ...
	}
	
	return (
		// ...
	)
}

// PIOR AINDA
const Component = (props: IProps) => {
	function handleSomething() {
		// ...
	}
	
	return (
		// ...
	)
} 
```

## Exportando arquivos

- Iremos usar **SEMPRE** `export default` nos componentes

```
// ruim
export function Component(props: IProps) {
	return (
		// ...
	)
}

// bom 
function Component(props: IProps) {
	return (
		// ...
	)
}

export default Component 

// ruim 
function Component(props: IProps) {
	const handleSomething = () => {
		// ...
	}

	return (
		// ...
	)
}
```

- Tirando os componentes, não iremos usar export default

```
// ruim
Interface IProps {
	// ...
}

export default IProps

// bom
export Interface IProps {
	// ...
}
```

- Isso também vale para `custom hooks`

```
// ruim
const useHook = () => {
	// ...
}

export default useHook

// bom
export const useHook = () => {
	// ...
}
```

## Custom hooks

- Se precisar criar um custom hook, use `arrow functions`

```
// bom
export const useHook = () => {
	// ...
}

// ruim
export function useHook() {
	// ...
}
```

## Arquivos em PascalCase 
- Iremos seguir o padrão PascalCase que consiste em nomear todas as palavras com a primeira letra maiúscula

```
├─ components
│  ├─ MyComponentHere.tsx
```

## Nomeando coisas

- Tirando componentes e interfaces, iremos utilizar `camelCase` para nomear tudo.

```
// bom
const handleSomething = () => {
		// ...
}

// ruim
const HandleSomething = () => {
		// ...
}

// horripilante
const handle_something = () => {
		// ...
}
```

- Isso Inclue props de componentes

```
<MyComponent
	isHandsome
	name="hxsggsz"
/>
```

- Se a prop é uma string sempre passe entre aspas, única excessão é se você for usar `template string`

```
// bom
<MyComponent
	isHandsome
	name="hxsggsz"
/>

// ruim
<MyComponent
	isHandsome
	name={"hxsggsz"}
/>

// bom
<MyComponent name={`${name} is handsome?`} />
```

- Oculte parâmetros que sempre serão `true`

```
// ruim
<button isLoading={true}>teste<button>

// bom
<button isLoading>teste<button>
```

## Class component

- Nosso projeto está sendo feito inteiramente com `programação funcional`, então apenas use `functional components` :

```
// ruim
class Component extends React.Component {
  // ...
  render() {
    return (
      // ...;
    )
  }
}

// bom!!11
function Component(props: IProps) {
// ...
}

export default Component
```

## Estilizando componentes

- Estamos utilizando scss modules para estilização, ele tem umas diferenças do css normal

```
// bom
.button {
	/* seu css aqui */
	&:hover {
		/* seu css de hover aqui*/
	}
}

// ruim
.button {
	/* seu css aqui */
}

.button:hover {
	/* seu css de hover aqui*/
}
```

- use scss modules sempre

```
// ruim
import "./Component.scss"

function Component(props: IProps) {
	return (
		<div className="style" />
	)
}

// bom
import scss from "./Component.module.scss"

function Component(props: IProps) {
	return (
		<div className={scss.style} />
	)
}
```

- Evite inline-css, sempre crie uma classe para estilizar

```
// bom
import scss from "./Component.module.scss"

function Component(props: IProps) {
	return (
		<div className={scss.style} />
	)
}

// ruim
function Component(props: IProps) {
	return (
		<div style={{ color: "#fff" }} />
	)
}
```
## Tipando componentes

- Priorize `Interfaces` no lugar de `Types` , ambos servem para fazer a mesma coisa, mas estamos seguindo o padrão de Interfaces

```
// bom
Interface IProps {
	// ...
}

// ruim
Type IProps = {
	// ...
}
```

- Use o Prefixo `ITypes` na hora da criação de interfaces

```
// bom
Interface IProps {
	// ...
}

// ruim
Interface PropTypes {
	// ...
}
```

## Testes unitários

- Tente ser o mais claro para descrever seus testes, descreva a ação que você vai fazer como `describe()` e use o `it()`  para descrever a ação esperada do teste. Siga esse padrão:

```
describe('MyButtonComponent', () => {
  describe('when initialize', () => {
    it('should show the button on screen', () => {
      // ...
    });

    describe('when click', () => {
      it('should call the handleButton function ', () => {
        // ...
      });
    });
  });
});
```

## Alt em imagens

- SEMPRE coloque o atributo `alt` quando for usar alguma imagem no projeto, é bom por causa do `SEO` (mesmo que esse projeto não seja web) e acessibilidade.

```
// bom
<img src={image} alt="me and my dog" />

// ruim
<img src={image} />
```

- Evite usar o prefixo `image` ou `picture` porque os leitores de tela ja adicionam esse prefixo na hora de ler o `alt` então ficaria duplicado

```
// ruim
<img src={image} alt="image about me and my dog" />
```
## Estrutura de pastas do projeto

```

├─ public
│  ├─ arquivos de imagens aqui 
├─ src
│  ├─ App.tsx
|  |  ├─ arquivo de rotas
│  ├─ components
|  |  ├─ todos os componentes aqui
│  ├─ hooks
|  |  ├─ Custom Hooks ficarão aqui
│  ├─ pages
|  |  ├─ todas as paginas do projeto aqui
│  ├─ stores
|  |  ├─ lugar onde ficará todas as stores de Estados Globais do Zustand
│  ├─ styles
|  |  ├─ estado global aqui
│  ├─ utils
|  |  ├─ arquivos utils do projeto aqui

```

}