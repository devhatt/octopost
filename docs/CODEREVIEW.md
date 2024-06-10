# Revisão de códigos - Octopost 

## Sumário:

[Básico](#basico)

1.  [Estrutura da Pull Request](#estrutura-de-pr)
2.  [Revisão do código](#revisao-do-pr)
3.  [Verificação da tela e css](#verificacao-visual)

<a name="basico"></a>

<a name="estrutura-de-pr"></a>
<a name="revisao-do-pr"></a>
<a name="verificacao-visual"></a>

## Básico:

- Ler o que é esperado da tarefa (caso não saiba sobre o que é a tarefa)

## Estrutura do Pr

- Verificar estrutura do pr está certa, template, título e commits (commits precisa estar tudo perfeito, não pode ter commits trolls como "agora vai", checklists do template tem que estar todas feitas também)
Rodar as pipelines (hats)

## Sobre a revisão do código em si

- Seguir styleguide do projeto, nome de arquivos, tipo de functions, etc (https://github.com/devhatt/octopost/blob/master/docs/STYLEGUIDE.md)

- Verificar se tudo faz sentido em si, se não existe uma forma melhor de fazer determinada coisa
- Não pode ter comentário de lint (tirar restrição), a não ser que esse comentário já estivesse no arquivo

Sobre testes:

- Ter o describe com a primeira letra em maiúsculo
- Os testes devem ter uma boa escrita para serem lidos como um texto 

- Atenção a mais de um expect (as vezes precisa)
- Atenção ao uso de SpyOn (as vezes precisa)
- Testes não devem ser de implementação

## Verificação da tela e css

É interessante ver o css pela inspeção do browser, porque você consegue verificar se tem algo denecessário ou não

Para pegar o fork de alguém: 

Abre o projeto -> git remote add [ssh do fork da pessoa] -> git fetch [pessoa-fork] (pegar alterações da pessoa-fork) -> git checkout [nome-da-branch] -> pnpm i -f -> git pull

