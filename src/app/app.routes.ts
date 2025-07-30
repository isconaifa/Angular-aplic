import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./shared/home/home.component')
            },
            {
                path: 'relatorios',
                loadComponent: () => import('./aplic/relatorios-gerenciais/relatorios-gerenciais.component')
            },
            {
                path: 'consultas',
                loadComponent: () => import('./aplic/consultas/consultas.component')
            },
            {
                path: 'perfil',
                loadComponent: () => import('./aplic/perfil/perfil.component')
            },
            {
                path: 'formulario-empenhos',
                loadComponent: () => import('./tabelas/formulario-empenhos/formulario-empenhos.component')
            },
            {
                path: 'resultado-empenhos',
                loadComponent: () => import('./tabelas/resultado-empenhos/resultado-empenhos.component')
            },
            {
                path: 'sin-up',
                loadComponent: () => import('./aplic/sin-up/sin-up.component')
            },
            {
                path: 'log-out',
                loadComponent: () => import('./aplic/log-out/log-out.component')
            },
            {
                path: 'quantidades',
                loadComponent: () => import('./aplic/quantidades-reenvios/quantidades-reenvios.component')
            },
            {
                path: 'unidade-gestora',
                loadComponent: () => import('./aplic/unidade-gestora/unidade-gestora.component')
            }, 
            {
                path: 'sugestoes',
                loadComponent: () => import('./aplic/sugestoes/sugestoes.component')

            },
            {
                path: 'login',
                loadComponent: () => import('./aplic/login/login.component')
            },
            {
                path: '',
                redirectTo: 'formulario-empenhos',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'formulario-empenhos',
        pathMatch: 'full'
    }
];
