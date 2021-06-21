import { Breadcrumb } from '@models/template/Breadcrumb';
import { NavigationLink } from '@models/template/NavigationLink';

const LOGIN = new NavigationLink("Login", "", "account_circle", "Inicio de sesión");
const HOME = new NavigationLink("Inicio", "/app/", "home", "Recepción de documentos necesarios para el registro");
const CUSTOM_THEME = new NavigationLink("Custom theme", "app/view-custom-theme", "format_paint", "Override the default theme and choose your palette colors");
const BUTTONS_THEME = new NavigationLink("Buttons theme", "app/view-buttons", "radio_button_checked", "Use different buttons bootstrap or angular theme");
const DYNAMIC_FORM = new NavigationLink("Dynamic form", "app/dynamic-form", "dynamic_feed", "Create a form with your own form elements and parametters");
const MESSAGES = new NavigationLink("Messages", "app/view-messages", "message", "Alerts, Messages and tooltip");

export const BC_HOME = new Breadcrumb(HOME);
export const BC_BUTTONS = new Breadcrumb(BUTTONS_THEME, [HOME]);
export const BC_DYNAMIC_FORM = new Breadcrumb(DYNAMIC_FORM, [HOME]);
export const BC_MESSAGES = new Breadcrumb(MESSAGES, [HOME]);
export const BC_CUSTOM_THEME = new Breadcrumb(CUSTOM_THEME, [HOME]);

//Nomenclatura de breadcrums BC_Name_Component
export const linksAdmin: NavigationLink[] = [HOME, CUSTOM_THEME, BUTTONS_THEME, DYNAMIC_FORM, MESSAGES];
export const linksPage: NavigationLink[] = [LOGIN];
