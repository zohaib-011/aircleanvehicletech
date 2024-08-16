 
 
const FaqItem=(props)=>{
const {no,question,answer}= props;
return (
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Faq # {no}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>{question}</strong> 
          <p>{answer}</p>
        </div>
      </div>
    </div>
     
  </div>
)
}
export default FaqItem;