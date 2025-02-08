
- para saber o que pode ser usado em cada tipo de navegador
 can i use

- babeljs.io -> mostra versões antigas de itens da linguagem 

npm ini -y
cria arquivo package.json

npm install --save-dev @babel/cli @babel/preset-env @babel/core
instala o babel
cria package-lock.json e node_modules

npx babel main.js -o bundle.js --presets=@babel/env
converte o código para um tipo antigo

package.json - babel: "babel ./main.js -o bundle.js --presets=@babel/env -w" 
-w significa que ele fica assistindo o código, arquivo bundle.js sempre sera atualizado depois de mudar o main.js

O webpack permite o uso de módulos em javascript com importações e exportações usando o padrão ES Modules (import/export) ou CommonJS (require/module.exports).
webpack (boilerplate)
passo a passo:
npm init -y ou npm init
babel-loader 
webpack regenerator-runtime core-js@2

common js

npm install --save-dev - para ir para devdependecies
npm install --save-prod - para voltar para dependencies
npm uninstall 
npm ls --depth=0 - mostra o que foi instalado pelo dev
npm outdated - mostra oque esta desatualizado

nodemon
- atualiza o server a cada mudança no arquivo que será assistido
- pertence a dev dependences
- npx nodemon arquivo.js
- package.json -> "scripts"->"start": "nodemon server.js"