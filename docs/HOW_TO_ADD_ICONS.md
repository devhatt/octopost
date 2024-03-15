# Como adicionar um svg no componente icons.

##### Aqui estão alguns passos para vocês conseguirem adicionar seus svg ao componente de icones em apenas 3 passos.

_Não há uma ordem especifica mas para fins educativos vamos seguir essa ordem abaixo_

### 1.1 - Copiar o SVG para pasta

Salvar os SVGs na pasta Icon/Icons/ (SVGS)

_Certifique-se de ter o SVG na pasta correta, após isso, siga os passos para tornar o svg editável._

### 1.2 - Editar os SVGs para deixa-los passível de receber as props

Na grande maioria das vezes o SVG virá assim:
`<svg width="18" height="14" viewBox="0 0 18 14" *fill="none"* xmlns="http://www.w3.org/2000/svg">
<path d="M6 11.17L1.83 7L0.410004 8.41L6 14L18 2L16.59 0.589996L6 11.17Z" *fill="black"*/>
</svg>`
_Atente-se aos 2 atributos envolvidos em _ ambos necessitarão de edição.\*

Existem 2 atributos "fill":
**Em <SVG** : Apague-o!
**Em <path** : Altere-o para currentColor

ficara assim:
`<svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11.17L1.83 7L0.410004 8.41L6 14L18 2L16.59 0.589996L6 11.17Z" fill="currentColor"/>
</svg>`

### 2.1 - Importar o svg no componente `icon.tsx`

Vamos importar o SVG da pasta correta seguindo os exemplos

ex:
_(PascalCase / kebab-case)_
`import *NovoSvg* from './icons/*novo-svg.svg*?react';`

**_IMPORTANT!_**
É necessário adicionar o sufixo `?react` na importacao seguindo de exemplo dos ja importados.\*\*

### 2.2 - Ainda em `icons.tsx` vamos adicionar a importação na função mapeadora `ICONS()` seguindo o padrão já existente " `<SVG ReactNode>`

const icons = (props: Omit<IconProps, 'icon' | 'size'>): Record<IconProps['icon'], React.ReactNode> => ({
'check': <Check {...props} />,
`'left-arrow': <LeftArrow {...props} />,`
`'right-arrow': <RightArrow {...props} />,`
**`'novo-icone': <NovoIcone {...props} />,`**
});

### 3.0 - Adicionar na interface `icon.types.tsx`

Dentro da interface, na propriedade `icon` adicionar o nome do novo svg seguindo os exemplos
_Lembrando que esse deverá ser o nome do icone em 'kebab case' e não do componente_

export interface IconProps extends SVGProps<SVGSVGElement> {
`icon: 'left-arrow' | 'novo-svg' |;`
size?: number;
}

## Pronto, teóricamente seu icone esta pronto para ser usado!

# TESTANDO

Apos seguir todas as etapas, teste no ladle da seguinte forma:

Adicione o icone em questao dentro do array no objeto `icon:{options:[''NOVO-ICONE]}` seguindo o padrao ja existente

icon: {
control: { type: 'select' },
**`options: ['left-arrow', 'novo-icone'],`**
},

`pnpm ladle start` lets go!

---

**_caso tenha feito tudo e o icone nao responde as propriedades no ladle, tais como size, color, enviar o icone para o thi, o problema pode ser no svg._**
