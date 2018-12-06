## 实现yii2高级版本的restful_api

复制backend为api

配置api\config\main.php
```
'urlManager' => [
    'enablePrettyUrl' => true,
    'showScriptName' => false,
    'enableStrictParsing' =>true,
    'rules' => [],
],
```
应用入口同级增加.htaccess文件
```
Options +FollowSymLinks
IndexIgnore */*

RewriteEngine on

# if a directory or a file exists, use it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# otherwise forward it to index.php
RewriteRule . index.php

RewriteRule \.svn\/  /404.html
RewriteRule \.git\/  /404.html
```
配置api\config\main.php
```
'modules' => [
    'v1' => [
        'class' => 'api\modules\v1\Module',
    ],
],
```
重新配置控制器
```
<?php

namespace api\modules\v1\controllers;

use yii\rest\ActiveController;

class GoodsController extends ActiveController
{
    public $modelClass = 'api\models\Goods';
}
```
为Goods配置Url规则
```
'rules' => [
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => ['v1/goods']
    ],
]
```