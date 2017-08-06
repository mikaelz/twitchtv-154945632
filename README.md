## Sample NodeJS starter app

This is created as a tutorial.

## Try it
`npm init -y`

Install yarn

`npm install -g yarn`

Install packages
`yarn add express morgan sequelize mysql2`

## Development
`yarn add --dev babel-cli babel-preset-es2015`

Create [Babel](https://babeljs.io/) configuration `.babelrc`

```
{
    'preset': ['es2015']
}
```

Init DB
```
sequelize init
```

To create models run
```
sequelize model:create --name User --attributes username:string
```

```
sequelize db:migrate
```
