import './Rodape.css'


function Rodape(){
    //JSX
    return ( //return de múltiplas linhas: ()
        <footer className='rodape'>
                <div className='rodapeEsquerdo'>
                    <img src="/imagens/fb.png" alt="Logo Facebook"/>
                    <img src="/imagens/tw.png" alt="Logo Twitter"/>
                    <img src="/imagens/ig.png" alt="Logo Instagram"/>
                </div>
                <div className='rodapeMeio'>
                    <img src="/imagens/logo.png" alt="Logo da página  do Organo"/>
                </div>
                <div className='rodapeDireito'>
                    <h3>Desenvolvido por Alura</h3>  
                </div>
             
        </footer>
        
    )
}
export default Rodape