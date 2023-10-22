## Lambda から RDS に接続する

* RDSはPostgreSQLインスタンス
* LambdaはRDSと同じVPCに配置
    * サブネットはRDSと同じに
    * セキュリティグループで、RDSへアウトバウンドで接続できるルールを設定
* ローカルで`npm init`して`npm install --save pg`


### 参考

* [AWS LambdaでPostgreSQLのRDSプロキシを使用する方法 \- Node\.js \#JavaScript \- Qiita](https://qiita.com/tronicboy/items/eb91f57a6ec14418c629)
* [【Node\.js】AWS LambdaからMySQL\(AWS RDS）のレコードの個数を取得 \#AWS \- Qiita](https://qiita.com/tatsuya1970/items/261c7e9cf3e87b8db55f)
* [Create serverless REST API using AWS Lambda API Gateway RDS postgres with Nodejs and Typescript](https://lazypandatech.com/blog/AWS/20/Create-serverless-REST-API-using-AWS-Lambda-API-Gateway-RDS-postgres-with-Nodejs-and-Typescript/)
* [aws \- awsでlambda関数からrdsに接続できない \- スタック・オーバーフロー](https://ja.stackoverflow.com/questions/93162/aws%E3%81%A7lambda%E9%96%A2%E6%95%B0%E3%81%8B%E3%82%89rds%E3%81%AB%E6%8E%A5%E7%B6%9A%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84)


