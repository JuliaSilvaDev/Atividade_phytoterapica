import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Foto from './Components/Foto';
import Section from './Components/Section';
import Produtos from './Components/Produtos';
import Produtosa from './Components/Produtosa';
import Inscreva from './Components/Inscreva';
import Amostra from './Components/Amostra';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Foto />
      <Section />
       
       <div className="container">
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" name="Lavanda (gt.França)" valor="60,00" parcelas="20,00" />
       <Produtosa foto="https://phytoterapica.vtexassets.com/arquivos/ids/155764/oleo-essencial-pimenta-preta-5ml-phytoterapica-01.jpg?v=637725581526530000" name="Pimenta-Preta" valor="50,00" parcelas="16,66" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155620/oleo-essencial-limao-siciliano-10ml-phytoterapica-a.jpg?v=637656078475700000" name="Limão Siciliano" valor="47,00" parcelas="15,66" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155745/oleo-essencial-erva-baleeira-5ml-phytoterapica-01.jpg?v=637725550520670000" name="Erva-Baleeira" valor="89,00" parcelas="29,66" />
       </div>
       <div className="container">
       <Produtosa foto="https://phytoterapica.vtexassets.com/arquivos/ids/156015/Mockup_Caixa_OE_Eucalipto_Globulos_5ml_1000x1000px.jpg?v=637976551458600000" name="Eucalipto Globulus" valor="29,10" parcelas="9,70" />
       <Produtosa foto="https://phytoterapica.vtexassets.com/arquivos/ids/155649/oleo-essencial-camomila-azul-5ml-phytoterapica-caixa.jpg?v=637656135711800000" name="Camomila Azul(Camomila Alemã)" valor="284,00" parcelas="94,66" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155753/oleo-essencial-litsea-cubeba-10ml-phytoterapica-01.jpg?v=637725566405770000" name="Litsea (May Chang)" valor="40,00" parcelas="13,33" />
       <Produtosa foto="https://phytoterapica.vtexassets.com/arquivos/ids/155468/_leo_essencial_de_mandarina_vermelha_org_nico_10ml_-_phytoterapica_1_.jpg?v=637655097713870000" name="Mandarina Vermelha (Orgânico)" valor="58,00" parcelas="19,33" />
       </div>
       <div className="container">
       <Produtosa foto="https://phytoterapica.vtexassets.com/arquivos/ids/155816/oleo-essencial-ylang-ylang--ilangue-ilangue-cananga-5ml-phytoterapica-01.jpg?v=637725627924400000" name="Ylang Ylang(Cananga)" valor="47,00" parcelas="15,67" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155841/oleo-essencial-cravo-10ml-phytoterapica-01.jpg?v=637725648540800000" name="Cravo" valor="38,00" parcelas="12,67" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=637725609590700000" name="Hortelã-Pimenta" valor="52,00" parcelas="17,33" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155814/oleo-essencial-geranio-5ml-phytoterapica-01.jpg?v=637725623120030000" name="Gerânio" valor="44,00" parcelas="14,66" />
       </div>
       <div className="container">
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" name="Melaleuca (Tea Tree)" valor="50,00" parcelas="16,66" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155838/oleo-essencial-bergamota-5ml-phytoterapica-01.jpg?v=637725646137900000" name="Bergamota" valor="40,00" parcelas="13,33" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000" name="Olíbano" valor="84,00" parcelas="28,00" />
       <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155535/oleo-essencial-palmarosa-5ml-phytoterapica-a.jpg?v=637655363588300000" name="Palmarosa" valor="36,00" parcelas="12,00" />
       </div>
     
     <Inscreva />
     <Amostra />
     <Footer />
    
    </div>
   
  );
}

export default App;
