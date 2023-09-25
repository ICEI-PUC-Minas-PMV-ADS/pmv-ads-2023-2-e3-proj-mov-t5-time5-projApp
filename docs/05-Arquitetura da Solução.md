# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-time5-projApp/assets/114267923/a3caa6e7-dc79-49bd-b3a8-53b84b634b09)

## Modelo e Esquema Relacional

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-time5-projApp/assets/114267923/47ef1baa-b0c5-4e9b-b65c-8c6bd571c5b9)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Hospedagem: Azure
Framework: React Native
IDEs: Visual Studio ou Visual Studio Code
Controle de Versão: Git

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t5-time5-projApp/assets/114267923/bcbd1efe-529d-4096-aabd-869d622a9990)

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

A hospedagem será feita através do serviço de cloud azure em que os estudantes da PUC Minas tem acesso. O recursos necessários ficarão todos alocados em um grupo de serviço em que todos os membros terão acesso de administração para release de pipeline CI(Integração Contínua) com git e CD(Deployment Contínuo) com cloud azure em recurso de realease super administrado.

## Qualidade de Software

As características de qualidade de produto de software que melhor se adequam ao projeto são:

> - Funcionalidade
    > -	Segurança de acesso
    > - Interoperabilidade
    > -	Acuracia
    > -	Adequação
> - Portabilidade
    > -	Adaptabilidade

|Caracteristica de qualidade     | Subcaracterística de qualidade  |Métricas de avaliação |
|-------|-------------------------|----|
|Funcionalidade| Segurança de acesso | Atendimento do RF-001 e sucesso nos testes Registro de usuário e login | 
|| Interoperabilidade |  Atendimento do RF-004 | 
|| Acuracia | Taxa de sucesso em todos os testes | 
|| Adequação | Quantidaqde de RF e RNF atendidos | 
|Portabilidade| Adaptabilidade |  Atendimento do RNF-001 | 
