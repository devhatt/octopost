# Diretrizes de Contribuição para o Repositório Octopost

Bem-vindo ao Octopost! Agradecemos pelo seu interesse em contribuir para este projeto open source. Suas contribuições são fundamentais para o sucesso e a melhoria contínua deste projeto. Antes de começar, por favor, leia e siga estas diretrizes para garantir um processo de contribuição harmonioso e eficaz.

## Como Contribuir

1. **Forquilhando o Repositório:** Faça um fork deste repositório para sua própria conta GitHub clicando no botão "Fork".
2. **Clonando o Repositório:** Clone o fork do repositório para a sua máquina local:

   ```bash
   git clone <https://github.com/Alecell/octopost.git>
   cd octopost

   ```

3. **Pegue uma Issue:** Para instruções mais detalhadas, acesse **[Pegando uma Issue](https://github.com/Alecell/octopost/blob/master/FLOWISSUE.md/)**.


4. **Crie uma Branch:** Crie uma branch a partir da develop para trabalhar nas suas alterações:

   ```bash
   git checkout develop
   git reset --hard upstream/develop
   git checkout -b nome-da-sua-branch

   ```

5. **Faça Alterações:** Faça as alterações desejadas no código, documentação, ou outros recursos.
6. **Código:** Siga o Style guide [octopost/STYLEGUIDE.md at master · Alecell/octopost (github.com)](https://github.com/Alecell/octopost/blob/master/STYLEGUIDE.md)
7. **Testes:** Certifique-se de que todas as mudanças são testadas e não introduzem erros.
8. **Commits Significativos:** Faça commits significativos e com mensagens claras. Utilizando comando abaixo e seguindo as instruções o commit ficara no padrão utilizado no projeto.

```bash
    git commit
```

1. **Atualize a Documentação:** Se necessário, atualize a documentação relevante para refletir suas mudanças.
2. **Envie as Alterações:** Envie suas alterações para o seu fork:

   ```bash
   git push origin nome-da-sua-branch

   ```

3. **Criação de Pull Request (PR):** Abra um Pull Request pelo o seu fork para o repositorio do octopost na branch develop, descrevendo suas alterações e fornecendo contexto sobre o que foi feito.
4. **Revisão de Código:** A equipe de mantenedores do projeto irá revisar o seu PR. Esteja disposto a fazer ajustes se necessário.
5. **Merge e Fechamento:** Após a revisão bem-sucedida, suas alterações serão mescladas à branch principal. Seu PR será fechado.

## Diretrizes de Contribuição

- **Estilo de Código:** Siga as convenções de estilo de código existentes no projeto.[Style Guide](https://github.com/Alecell/octopost/blob/master/STYLEGUIDE.md)
- **Documentação:** Sempre atualize a documentação para refletir mudanças significativas.
- **Testes:** Certifique-se de que suas alterações não quebram testes existentes. Se necessário, adicione novos testes.
- **Tamanho das Pull Requests:** PRs menores são mais fáceis de revisar e mesclar. Tente manter o escopo de suas contribuições relativamente pequeno.
- **Mantenha a Cortesia:** Seja cortês e respeitoso ao discutir e revisar o trabalho de outros contribuidores.

## Reconhecimento

Agradecemos por ajudar a melhorar o Octopost! Sua dedicação à qualidade e inovação é fundamental para o sucesso contínuo deste projeto.

Se você tiver alguma dúvida ou precisar de ajuda em qualquer etapa do processo de contribuição, sinta-se à vontade para criar um problema (issue) ou entrar em contato com a equipe de mantenedores.[Discord](discord.gg/fhutDfuDa9)