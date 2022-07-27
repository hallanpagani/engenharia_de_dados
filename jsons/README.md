Para importar os arquivos JSON para o seu banco de dados MongoDB de testes pode-se utilizar a ferramenta Compass

### Software Compass: 
* Onde baixar: https://www.mongodb.com/pt-br/products/compass
* Referência para importação de arquivos JSON além doque foi mostrado em vídeo: https://www.mongodb.com/docs/compass/current/import-export/

Lembrando que vimos em vídeo como fazer a importação e exportação com as ferramentas: 
  * [Mongotools](https://www.mongodb.com/try/download/database-tools)
  * [Robomongo](https://robomongo.org/)

**Você deve estar posicionado(a) na pasta do arquivo json nestes exemplos abaixo:**

### Importar dados com mongotools - localhost
```bash
  mongoimport livros.json -d muitoslivros -c livros
````

### Exportar dados com mongotools - localhost
```bash
  mongoexport -c livros -d muitoslivros -o livros_exportado_local.json
````

### Importar dados com mongotools - Remote server
```bash
  // ESPERA ISSO:
  mongoimport --username <USER> --password <PASSWORD> --uri "mongodb+srv://<HOST>/" --db "<DATABASE>" --collection "livros" --file "livros.json"
  // COMANDO  
  mongoimport --username admin --password 123456 --uri "mongodb+srv://cluster0.xpto.mongodb.net/" --db "muitoslivros" --collection "livros" --file "livros.json"
````

### Exportar dados com mongotools - Remote server
```bash
  // ESPERA ISSO:
  mongoexport --uri mongodb+srv://<USER>:<PASSWORD>@<HOST>/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --out <FILENAME>

  // COMANDO
  mongoexport --uri mongodb+srv://admin:123456@cluster0.xpto.mongodb.net/muitoslivros --collection livros --type json --out livros_remoto.json
````

## Autor

- [@hallanpagani](https://github.com/hallanpagani)
