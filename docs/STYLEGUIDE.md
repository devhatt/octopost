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

Todos os componentes serão criados em **`funções normais`**, `arrow functions` **apenas** dentro dos componentes

```ts
// Bom
function Component(props: IProps) {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}

// Ruim
const Component = (props: IProps) => {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}

// Ruim
const Component = (props: IProps) => {
	function handleSomething() { /* ... */ }
	return ( /* ... */ )
}
```

## Exportando arquivos

Iremos usar **SEMPRE** `export default` nos componentes

```ts
// Bom
function Component(props: IProps) {
	return ( /* ... */ )
}

export default Component

// Ruim
export function Component(props: IProps) {
	return ( /* ... */ )
}

// Ruim
function Component(props: IProps) {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}
```

Com excessão dos componentes, não iremos usar export default

```ts
// Bom
export interface IProps {
  /* ... */
}

// Ruim
interface IProps {
  /* ... */
}
export default IProps;
```

Isso também vale para `custom hooks`

```ts
// Bom
export const useHook = () => {
  /* ... */
};

// Ruim
const useHook = () => {
  /* ... */
};
export default useHook;
```

## Custom hooks

Se precisar criar um custom hook, use `arrow functions`

```ts
// Bom
export const useHook = () => {
  /* ... */
};

// Ruim
export function useHook() {
  /* ... */
}
```

## Componentes em PascalCase

Iremos seguir o padrão PascalCase que consiste em nomear todas as palavras com a primeira letra maiúscula.

```
├─ components
│  ├─ MyComponentHere.tsx
```

## Nomeando coisas

Tirando componentes e interfaces, iremos utilizar `camelCase` para nomear tudo.

```ts
// Bom
const handleSomething = () => {
  /* ... */
};

// Ruim
const HandleSomething = () => {
  /* ... */
};

// Ruim
const handle_something = () => {
  /* ... */
};
```

Isso Inclue props de componentes

```ts
<MyComponent
	isHandsome
	name="hxsggsz"
/>
```

Se a prop é uma string sempre passe entre aspas, única excessão é se você for usar `template string`

```ts
// Bom
<MyComponent
	isHandsome
	name="hxsggsz"
/>

// Ruim
<MyComponent
	isHandsome
	name={"hxsggsz"}
/>
```

Oculte parâmetros que sempre serão `true`

```ts
// Bom
<button isLoading>teste<button>

// Ruim
<button isLoading={true}>teste<button>
```

## Class component

Nosso projeto está sendo feito inteiramente com `programação funcional`, então apenas use `functional components` _(salvo excessões bem excessíveis)_:

```ts
// Bom
function Component(props: IProps) { /* ... */ }

export default Component

// Ruim
class Component extends React.Component {
  // ...
  render() {
    return ( /* ... */ )
  }
}
```

## Estilizando componentes

Estamos utilizando `scss modules` para estilização, ele tem umas diferenças do css normal

```scss
// Bom
.button {
  /* seu css aqui */
  &:hover {
    /* seu css de hover aqui*/
  }
}

// Ruim
.button {
  /* seu css aqui */
}
.button:hover {
  /* seu css de hover aqui*/
}
```

use `scss modules` sempre

```tsx
// Bom
import scss from './Component.module.scss';

function Component(props: IProps) {
  return <div className={scss.style} />;
}

// Ruim
import './Component.scss';

function Component(props: IProps) {
  return <div className="style" />;
}
```

Evite _inline-css_, sempre crie uma classe para estilizar.
_Existem excessões em que é precisa usar `inline styles`, mas são casos específicos e estarão atrelados a apenas uma propriedade_

```tsx
// Bom
import scss from './Component.module.scss';

function Component(props: IProps) {
  return <div className={scss.style} />;
}

// Ruim
function Component(props: IProps) {
  return <div style={{ color: '#fff' }} />;
}
```

## Tipando componentes

Priorize `Interfaces` no lugar de `Types` , ambos servem para fazer a mesma coisa, mas estamos seguindo o padrão de interfaces

```ts
// Bom
interface IProps {
  /* ... */
}

// Ruim
type IProps = {
  /* ... */
};
```

Use o Prefixo `I` na hora da criação de interfaces.

```ts
// Bom
interface IProps {
  /* ... */
}

// Ruim
interface PropTypes {
  /* ... */
}
```

Use o Prefixo `T` na hora da criação de tipos.

```ts
// Bom
type TProps = {
  /* ... */
};

// Ruim
type PropTypes = {
  /* ... */
};
```

Use o Prefixo `E` na hora da criação de enums.

```ts
// Bom
enum ECoisas = { /* ... */ }

// Ruim
type Coisas = { /* ... */ }
```

## Testes unitários

Tente ser o mais claro para descrever seus testes, descreva a ação que você vai fazer como `describe()` e use o `it()` para descrever a ação esperada do teste. Siga esse padrão:
_Evite a palavra "should" seguida do `it`, faça sua sentença ser hiperativa, como "it has", "it renders", "it fails" e etc. Isso serve pra evitar que toda descrição de um teste inicie por "should"._

```ts
describe('MyButtonComponent', () => {
  describe('when initialize', () => {
    it('shows the button on screen', () => {
      // ...
    });

    describe('when click', () => {
      it('calls the handleButton function ', () => {
        // ...
      });
    });
  });
});
```

## Alt em imagens

SEMPRE coloque o atributo `alt` quando for usar alguma imagem no projeto, é bom por causa do `SEO` (mesmo que esse projeto não seja web) e acessibilidade.

```tsx
// Bom
<img src={image} alt="me and my dog" />

// Ruim
<img src={image} />
```

Evite usar o prefixo `image` ou `picture` porque os leitores de tela ja adicionam esse prefixo na hora de ler o `alt` então ficaria duplicado

```tsx
// Ruim
<img src={image} alt="image about me and my dog" />
```

## Estrutura de pastas do projeto

```

├─ public
│  ├─ coisas de fato publicas como robots.txt, favicons, sitemap.xml e etc.
├─ src
│  ├─ App.tsx
|  |  ├─ Root provider
│  ├─ components
|  |  ├─ Componentes de alta usabilidade
│  ├─ hooks
|  |  ├─ Hooks customizados de alta reusabilidade
│  ├─ pages
|  |  ├─ Páginas da aplicação
│  ├─ store
|  |  ├─ Store geral da aplicação
│  ├─ styles
|  |  ├─ Estilos globais
│  ├─ utils
|  |  ├─ Funções/classes de alta reusabilidade
│  ├─ services
|  |  ├─ Serviços externos a aplicação
│  ├─ config
|  |  ├─ Configurações de módulos
│  ├─ snippets
|  |  ├─ Snippets usados na aplicação
│  ├─ interfaces
|  |  ├─ Interfaces que não são relativas a um módulo específico
│  ├─ constants
|  |  ├─ Constantes que não são relativas a um módulo específico
│  ├─ enums
|  |  ├─ Enums que não são relativos a um módulo específico
```
