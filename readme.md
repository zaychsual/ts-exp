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

## Installation Package
1.  express
    ```sh
    yarn add express
    ```
2. types
    ```sh
    yarn add @types/express -D
    ```
3. dotenv
    ```sh
    yarn add dotenv
    ```
4. bodyparser untuk mengambil data yg dikirim via postman
    ```sh
    yarn add body-parser    
    ```
5. add morgan untuk memberi log/keterangan setiap ada request
    ```sh
    yarn add morgan @types-morgan -D
    ```
6. compression untuk kompressor setiap request, helmet, dan cors
    ```sh
    yarn add compression helmet cors
    ```
    add type
    ```sh
    yarn add @types/compression @types/helmet @types/cors -D
    ```
7. add ORM 
    ```sh
    yarn add sequelize sequelize-cli
    ```
8. add hash password
    ```sh
    yarn add bcrypt
    ```
    add type
    ```sh
    yarn add @types/bcrypt -D
    ```
9. add validator
    ```sh
    yarn add express-validator
    ```
10. add jwt
    ```sh
    yarn add jsonwebtoken
    ```
    add type
    ```sh
    yarn add @types/jsonwebtoken
    ```


## ORM Sequelize
1. setelah selesai instalasi buat file .sequelizerc di root, lalu jalankan perintah
    ```sh
    ./node_modules/.bin/sequelize-cli init
    ```
    perintah diatas akan membuat folder dan file bawaan sequelize,penempatan folder tersebut mengikuti settingan pada file .sequelizerc
2. perintah membuat migrasi 
    ```sh
    ./node_modules/.bin/sequelize-cli model:generate --name user --attributes username:string,password:string --underscored
    ```
    - name => nama table
    - attributes => column di dalam table
    - underscored => pembuatan nama table berbentuk snakecase,sehingga lebih mudah dibaca karena bawaanya menggunakan CamelCase
    perintah diatas akan membuat file pada folder migrations, dan model sesuai nama
3. perintah melakukan migration
    ```sh
    ./node_modules/.bin/sequelize-cli db:migrate
    ```

## Middleware
konsep disini seperti satpam saat akan mengakses request file yang berkaitan ada di ``` middlewares/AuthMiddleware ```

```sh
import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => 
{
    let auth = false;
    
    if(auth) {
        // ini merupakan perintah selanjutnya misalkan lolos maka akkan menjalankan function selanjutnya
        next();
    }
    return res.send("unauthenticated");
}
```
kegunaan ``` next() ``` pada codingan diatas berfungsi sebagai filter ketika auth sesuai maka program akan menjalankan perintah selanjutnya, contoh penggunaannya ada di bawah ini

```sh
import { auth } from "../middlewares/AuthMiddleware";
// controllers
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRoute 
{
    public routes(): void 
    {
        this.router.get("/", auth,  UserController.index);
```
jika ada auth berhasil maka, perintah yang di lanjutkan ada ke ``` UserController.index ```
