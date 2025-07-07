let calculator = JSON.parse(localStorage.getItem('cal')) || '';
        document.querySelector('.js-display').value = calculator;
        function _eval(calculator) {
            localStorage.setItem('cal',JSON.stringify(calculator));
            display();

        }
        function _clear (){
            calculator = ''; 
            localStorage.setItem('cal',JSON.stringify(calculator));
            display();
        }
       
        function display() {
            document.querySelector('.js-display').value = calculator;
        }
        function updation(value){
            calculator += value;
            localStorage.setItem('cal',JSON.stringify(calculator));
            display();

        }
        function del() {
             calculator = JSON.parse(localStorage.getItem('cal'));
             //console.log(calculator);
             calculator= calculator.substring(0,calculator.length-1);
             //console.log(calculator);
             localStorage.setItem('cal',JSON.stringify(calculator));
             display();
        } 
