/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFilePath = path.join(__dirname, '.env');

async function setupDotEnv() {
  if (fs.existsSync(envFilePath)) {
    console.log(
      'O .env já existe, se você deseja recriá-lo, exclua o arquivo e execute este script novamente.'
    );
    return;
  }

  try {
    console.log('Baixando o .env do repositório...');
    const envData = await fetch(
      'https://raw.githubusercontent.com/devhatt/envs/main/octopost-frontend.env'
    ).then((response) => response.text());
    fs.writeFileSync(envFilePath, envData);
    console.log('O arquivo .env foi criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o arquivo .env:', error);
  }
}

setupDotEnv();
