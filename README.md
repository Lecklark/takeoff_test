Фронт часть проекта доступна по адресу: https://takeoff-test-client.surge.sh/

Бек часть задеплоена на heroku: https://takeoff-test-server.herokuapp.com

Для запуска локальной сборки необходимо:
1) Клонируйте репозиторий через консоль с помощью команды git clone 
2) Зайти через консоль в корневую папку проекта
3) Запусть команду npm install
4) После установки пакетов запустить команду npm run start
5) Зайти в браузере по адресу http://localhost:3000

Краткое описание:
В качестве стейт менеджера в проекте используется redux, для управления запросами на сервер и их кешировнаия используется react-query/axios. Управления формами осуществляется с помощью formik'а.Backend выполнен с использованием express и json-server'а.
