const faqQsc=document.getElementsByClassName(".faq-box");
const faqAns=document.getElementsByClassName(".ans")

for (let i = 0; i < faqQsc.length; i++) {
faqQsc[i].addEventListener("click",()=>{
    this.classList.toggle("active")
})
    
}