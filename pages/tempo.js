function Tempo(props){
        console.log('>Passando pelo Props')
        const dynamicDate = new Date();
        const dynamicDateString = dynamicDate.toGMTString();

        return (
            <div> 
                <div>Acessar{dynamicDateString}(dinâmico) </div>
                <div>{props.staticDateString} (estático)</div>
               
                </div>

         
                
            
        )


}
export function getStaticProps(){
        console.log('>Passando pelo Props')
        const staticDate = new Date();
        const staticDateString = staticDate.toGMTString();

    return {
         props: {
             staticDateString
         },
         revalidade:1
    }

}
export default Tempo;