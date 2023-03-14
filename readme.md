## About Project
Ini merupakan project menggunakan typescript dan express JS saya sengaja menyimpan di git sebagai pembelajaran bagi saya agar bisa mengulang kembali

## Tahapan pengerjaan
1. buka terminal jalankan
    ```sh
    yarn init
    ```
2. jalankan perintah pada terminal untuk menginstall typescript
    ```sh 
    yarn add typescript nodemon -D 
    ```
3. ubah konfigurasi pada package.json
    ```sh
    "scripts": {
        "tsc": "rm -rf build/ && tsc",
        "ts": "rm -rf build/ && tsc -w",
        "dev": "nodemon ./build/index.js"
    },
    ```
    - tsc berguna untuk compile ts ke js
    - ts berguna compile ts ke js format word lebih bersifat live,dia akan membaca file apa saja yg berubah
    - dev berguna running js yg sudah di compile
4. konfigurasi tsc, jalankan perintah pada terminal
    ```sh
    ./node_modules/.bin/tsc --init ko
    ```
    perintah diatas akan membuat file tsconfig.json pada root
5.  instal express
    ```sh
    yarn add express
    ```
6. install types
    ```sh
    yarn add @types/express -D
    ```
7. install dotenv
    ```sh
    yarn add dotenv -D
    ```
8. install bodyparser untuk mengambil data yg dikirim via postman
    ```sh
    yarn add body-parser -D    ```
9. install bodyparser untuk mengambil data yg dikirim via postman
    ```sh
    yarn add morgan @types-morgan -D
    ```