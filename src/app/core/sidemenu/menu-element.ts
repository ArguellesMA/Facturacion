export const menus = [
    {
        'name': 'Documentos',
        'icon': 'insert_drive_file',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Generar CFDI 3.3',
                'link': 'Documentos/gcfdi33',
                'icon': 'line_weight',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Generar nomina 1.2',
                'link': 'Documentos/gnomina12',
                'icon': 'my_library_books',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Generar complemento pagos',
                'link': 'Documentos/gpagos',
                'icon': 'attach_money',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Generar retenciones',
                'link': 'Documentos/gretenciones',
                'icon': 'book',
                'chip': false,
                'opne': true,
            },
            {
                'name': 'Generar comercio exterior 1.1',
                'link': 'Documentos/gcomercio',
                'icon': 'chrome_reader_mode',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Catalogos',
        'icon': 'pages',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Clientes',
                'link': 'Catalogos/clientes',
                'icon': 'perm_identity',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Empleados',
                'link': 'Catalogos/empleados',
                'icon': 'account_circle',
                'chip': false,
                'open': false,
            },
            {

                'name': 'Etiquetas personalizadas',
                'link': 'Catalogos/etiquetas',
                'icon': 'card_membership',
                'chip': false,
                'open': false,

            },
            {
                'name': 'Impuestos',
                'link': 'Catalogos/impuestos',
                'icon': 'account_balance_wallet',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Impuestos locales',
                'link': 'Catalogos/ilocales',
                'icon': 'account_balance',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Mis plantillas PDF',
                'link': 'Catalogos/mplantillas',
                'icon': 'insert_drive_file',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Productos',
                'link': 'Catalogos/productos',
                'icon': 'local_play',
                'chip': false,
                'open': false,
            },
          //  {
          //      'name': '..........',
          //      'link': 'material-widgets/autocomplete',
          //      'icon': 'get_app',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '.........',
          //      'link': 'material-widgets/checkbox',
          //      'icon': 'check_box',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '.........',
          //      'link': 'material-widgets/datepicker',
          //      'icon': 'date_range',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'link': 'material-widgets/slider',
          //      'icon': 'keyboard_tab',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'link': 'material-widgets/slide-toggle',
          //      'icon': 'album',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'icon': 'menu',
          //      'link': 'material-widgets/menu',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'link': 'material-widgets/progress-bar',
          //      'icon': 'trending_flat',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'icon': 'input',
          //      'link': 'material-widgets/input',
          //      'open': false,
          //  },
          //  {
          //      'name': '.........',
          //      'icon': 'radio_button_checked',
          //      'link': 'material-widgets/radio',
          //      'chip': false,
          //      'open': false,
          //  },
          //  {
          //      'name': '..........',
          //      'icon': 'select_all',
          //      'link': 'material-widgets/select',
          //      'open': false,
          //  },
        ]
    },
    // {
    //     'name'   : '..........',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Herramientas',
        'icon': 'build',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Bridge TXT 3.3',
                'icon': 'bookmark',
                'link': 'Herramientas/bridge33',
                'open': false,
            },
            {
                'name': 'Bridge TXT 3.2',
                'icon': 'bookmark_outline',
                'link': 'Herramientas/bridge32',
                'open': false,
            },
            {
                'name': 'Buzon',
                'icon': 'local_post_office',
                'link': 'Herramientas/buzon',
                'open': false,
            },
            {
                'name': 'Prefacturas',
                'icon': 'storage',
                'link': 'Herramientas/prefacturas',
                'open': false,
            },
            {
                'name': 'Pre-nomina 3.3',
                'icon': 'my_library_books',
                'link': 'Herramientas/prenomina',
                'open': false,
            },
            {
                'name': 'Pre-nomina3.2',
                'icon': 'featured_play_list',
                'link': 'Herramientas/prenomina32',
                'open': false,
            },
            {
                'name': 'Tickets',
                'icon': 'receipt',
                'link': 'Herramientas/tickets',
                'open': false,
            }
        ]

    },
    {
        'name': 'Registros',
        'icon': 'mode_edit',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'CFDI 3.3',
                'icon': 'view_day',
                'link': 'Registro/cfdi33',
                'open': false,
            },
            {
                'name': 'Retenciones',
                'icon': 'view_compact',
                'link':  'Registro/retenciones',
                'open':  false,
            }
        ]
    }, 
    //{
    //    'name': 'Scrumboard',
    //    'open': false,
    //    'link': '/auth/scrumboard',
    //    'icon': 'grade',
    //},
    //{
    //    'name': 'Applications',
    //    'icon': 'view_module',
    //    'open': false,
    //    'link': false,
    //    'sub': [
    //        {
    //            'name': 'chat',
    //            'icon': 'chat',
    //            'link': 'chats/chat',
    //            'open': false,
    //        },
    //        {
    //            'name': 'mail',
    //            'icon': 'mail',
    //            'link': 'mail/mail',
    //            'open': false,
    //        },
    //        {
    //            'name': 'Editor',
    //            'icon': 'editor',
    //            'link': 'editor/editor',
    //            'open': false,
    //        }
    //    ]
    //},
     {
        'name': 'Configuracion de cuenta',
        'icon': 'settings',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Informacion fiscal',
                'icon': 'account_box',
                'open': false,
                'link': 'ConfiguracionC/ifiscal',
            }, 
            {
                'name': 'Sucursales/Cuentas',
                'icon': 'domain',
                'open': false,
                'link': 'ConfiguracionC/sucuentas',
            },
            {
                'name': 'Certificado',
                'icon': 'recent_actors',
                'open': false,
                'link': 'ConfiguracionC/certificado'
            },
            {
                'name': 'Activacion de creditos de CFDI',
                'icon': 'assignment_turned_in',
                'link': 'ConfiguracionC/creditoscfdi',
                'open': false,
            },
            {
                'name': 'Activacion de creditos de recepcion',
                'icon': 'description',
                'link': 'ConfiguracionC/creditosrecepcion',
                'open': false,
            },
            {
                'name': 'Logos',
                'icon': 'whatshot',
                'link': 'ConfiguracionC/logos',
                'open': false,  
            },
            {
                'name': 'Activar complementos',
                'icon': 'beenhere',
                'link': 'ConfiguracionC/complementos',
                'open': false,
            },
            {
                'name': 'Mis pagos',
                'icon': 'attach_money',
                'link': 'ConfiguracionC/pagos',
                'open': false,
            },
            {
                'name': 'Correo',
                'icon': 'contact_mail',
                'link': 'ConfiguracionC/correo',
                'open': false,
            },
            {
                'name': 'Carta manifiesto',
                'icon': 'email',
                'link': 'ConfiguracionC/cartaman',
                'open': false,
            },
            {
                'name': 'Configuracion general',
                'icon': 'settings',
                'link': 'ConfiguracionC/configuraciongral',
                'open': false,
            }
        ]
    },
    //{
    //    'name': '..........',
    //    'icon': 'pie_chart_outlined',
    //    'open': false,
    //    'link': false,
    //    'sub': [
    //        {
    //            'name': 'chartjs',
    //            'icon': 'view_list',
    //            'link': 'charts/chartjs',
    //            'open': false,
    //        },
    //        {
    //            'name': 'ngx-chart',
    //            'icon': 'show_chart',
    //            'open': false,
    //            'link': 'charts/ngx-charts',
    //        },
    //        {
    //            'name': 'nvd3',
    //            'icon': 'pie_chart',
    //            'open': false,
    //            'link': 'charts/nvd3-charts',
    //        }
    //    ]
    //}, 
    {
        'name': 'Paginas',
        'icon': 'map',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'login',
                'icon': 'directions',
                'link': 'pages/login',
                'open': true,
            },
           {
                'name': 'about',
                'icon': 'show_chart',
                'link': 'pages/about',
                'open': true,
            },
            {
                'name': 'contact',
                'icon': 'list',
                'link': 'pages/contact',
                'open': true,
            },
            {
                'name': 'services',
                'icon': 'pie_chart',
                'link': 'pages/services',
                'open': true,
            }
        ]
    }
];
