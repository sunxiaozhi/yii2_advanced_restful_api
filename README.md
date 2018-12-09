## 实现yii2高级版本的restful_api

#### 复制backend为api

#### 搜索替换应用信息

在api文件夹中，搜索backend，并修改为api

#### 清除前端文件[针对API]

切换到api文件夹下，清除无用的前端文件：
```
api/views 文件夹
api/web/css 文件夹
```

#### 配置初始化环境

切换到项目根目录，配置初始化环境

environments/dev文件夹下，复制一份backend文件夹，修改为api

environments/prod文件夹下，复制一份backend文件夹，修改为api

#### 在environments/index.php中，添加需要初始化的api文件夹路径

#### 自动测试初始化配置

#### 在codeception.yml中添加初始化配置:
```
# global codeception file to run tests from all apps
include:
    - common
    - api
    - frontend
    - backend
paths:
    log: console/runtime/logs
settings:
    colors: true
```

#### 执行 php init 初始化框架

***

#### 在common\config\main-local.php中配置数据库，再执行 php yii migrate

#### 创建goods数据表
```
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '商品名称',
  `price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '商品价格',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
```

#### 配置api\config\main.php
```
'urlManager' => [
    'enablePrettyUrl' => true,
    'showScriptName' => false,
    'enableStrictParsing' =>true,
    'rules' => [],
],
```

#### 应用入口同级增加.htaccess文件
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

#### 配置api\config\main.php
```
'modules' => [
    'v1' => [
        'class' => 'api\modules\v1\Module',
    ],
],
```

#### 重新配置控制器
```
<?php

namespace api\modules\v1\controllers;

use yii\rest\ActiveController;

class GoodsController extends ActiveController
{
    public $modelClass = 'api\models\Goods';
}
```

#### 为Goods配置Url规则
```
'rules' => [
    [
        'class' => 'yii\rest\UrlRule',
        'controller' => ['v1/goods']
    ],
]
```