document.addEventListener("DOMContentLoaded", function () {
  const resultField = document.querySelector('.result');
  const buttons = document.querySelectorAll('.btn');
  let calculation = '';

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const buttonText = button.value;

      if (buttonText === 'C') {
        calculation = '';
      } else if (buttonText === '=') {
        try {
          calculation = eval(calculation);
        } catch (error) {
          calculation = 'Error';
        }
      } else {
        calculation += buttonText;
      }

      resultField.value = calculation;
    });
  });
});
