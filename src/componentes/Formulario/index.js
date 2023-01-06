import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";


const Formulario = () => {
  const times  = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetida')
  }
  return (
    <section className='formulario'>
      <form  onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome aqui" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto  label="Imagem" placeholder="Insira aqui o endereço da sua imagem"/>
        <ListaSuspensa obrigatorio={true} itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
export default Formulario;
