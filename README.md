# Time que a Afya Gama (Front-end) 


### Descrição Geral

##### :dart: Objetivo

O sistema de gerenciamento de consultórios AfyaGama é capaz de controlar o cadastro de seus clientes, atendimentos e o histórico de prontuário dos clientes/pacientes.
Nesssa parte do sistema (front-end), você deve ser capaz de navegar entre todas as páginas e experimentar a integração com as funcionalidades promovidas pelo [back-end do sistema](https://github.com/afyalabs-1/afya-prontuario-backend). 

##### :computer: Equipe de desenvolvimento
- Frontend/UX: [Bianca Castanheira](https://github.com/BiancaCastanheira) e [Melissa Augusto Ribeiro](https://github.com/melissarib)
- Back-end: [Alex Felipe Barbosa](https://github.com/AlexFelipeBarbosa), [Felipe Henrique Fernandes Andrade](https://github.com/fellipehfa) e [Robson Lourenço](https://github.com/robinhosl2008)

##### :octocat: Tecnologias utilizadas
- ReactJS: biblioteca Javascript para criação de views para cada estado da aplicação 
- Material-UI: framework de componentes React para construção de design.

##### :memo: Funcionalidades 
- [x] Realização do Cadastro de Clientes 
- [x] Realização de Cadastro de Especialistas.
- [x] Realização de registro de atendimentos 
- [x] Exibição de histórico em prontuários de cada atendimento realizado.
- [x] Busca de atendimento por data de agendamento, data atendimento, cliente, especialista e status.


### Instruções de Uso
    
Para clonar projeto em seu computador, use o seguinte comando:

    git clone https://github.com/afyalabs-1/afya-prontuario-frontend.git
        
Instale as dependências utilizadas 

    npm install
        
Para iniciar em modo de desenvolvimento:

    npm start 

### Telas desenvolvidas
##### Login
##### Cadastro de pacientes
##### Cadastro de profissões
##### Cadastro de especialistas
##### Novo atendimento
##### Prontuários




### Estrutura do projeto

O projeto foi estruturado de forma em que as requisições aos serviços (api), componentes (components), layout das páginas (pages) e criação de rotas de navegação (routes) pudessem ser facilmente identificados. Você pode conferir a estrutura e organização dos diretórios no esquema abaixo.

    ┌ public            
    │   └── index.html
    ├── src
    │   ├── api 
    │   │  ├── AddressApi.js 
    │   │  ├── Api.js 
    │   │  ├── AppointmentApi.js 
    │   │  ├── AttendancesApi.js
    │   │  ├── ClientApi.js 
    │   │  ├── LoginApi.js
    │   │  ├── MedicalRecordApi.js
    │   │  ├── ProfessionApi.js 
    │   │  ├── SpecialistApi.js
    │   │  └── ViaCepApi.js
    │   ├── components
    │   │  ├── componentsSchedule 
    │   │  │   ├── AppointmentCard.js 
    │   │  │   └── SearchByFilters.js 
    │   │  ├── Cards.js 
    │   │  ├── CircularInderteminate.js
    │   │  ├── ClientMedicalRecord.js 
    │   │  ├── Loading.js 
    │   │  ├── Navbar.js
    │   │  └── SidebarData.js 
    │   ├── pages
    │   │  ├── customer 
    │   │  ├── customerRegistration 
    │   │  ├── dashboard
    │   │  ├── login 
    │   │  ├── medicalRecord
    │   │  ├── newAppointment
    │   │  ├── schedule
    │   │  ├── specialist
    │   │  └── specialistRegistration
    │   ├── routes
    │   │  ├── private.routes.js
    │   │  └── routes.js 
    │   ├── app.css
    │   ├── app.js
    │   └── index.js          
    ├── README.md                       
    └── package.json                    
