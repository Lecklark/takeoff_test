//routing
export const MAIN_PAGE = '/';
export const REGISTRATION_PAGE = '/registration';
export const LOGIN_PAGE = '/login';
export const CONTACTS_PAGE = '/contacts';

//text_messages
export const FIELD_REQUIRED_ERROR_MESSAGE = "Обязательное поле";

//url's
export const BASE_API_URL = "https://takeoff-test-server.herokuapp.com"

//table configs
export const CONTACTS_TABLE_HEADERS = [{
    Header: 'Имя и фамилия',
    accessor: 'fullname',
}, {
    Header: 'E-mail',
    accessor: 'email',
}, {
    Header: 'Телефон',
    accessor: 'phone',
}, {
    Header: 'Адрес',
    accessor: 'address'
}, {
    Header: '',
    accessor: 'funcColumn'
}]