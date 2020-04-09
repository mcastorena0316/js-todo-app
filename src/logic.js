const Logic = () => {
  const getTaskValues = (inputs, radioButtons, elemid) => {
    const formInputs = document.querySelectorAll(inputs);
    const formButtons = document.getElementsByName(radioButtons);

    const getInputValues = {};
    formInputs.forEach((input) => {
      getInputValues[input.id] = input.value;
    });

    formButtons.forEach((button) => {
      if (button.checked) {
        getInputValues.task_radio = button.value;
      }
    });

    getInputValues.id = elemid;
    getInputValues.completed = false;

    return getInputValues;
  };

  const getEditedTaskValue = (inputs, radioButtons) => {
    const formInputs = document.querySelectorAll(inputs);
    const formButtons = document.getElementsByName(radioButtons);
    const getInputValues = {};
    formInputs.forEach((input) => {
      getInputValues[input.getAttribute('data-id')] = input.value;
    });

    formButtons.forEach((button) => {
      if (button.checked) {
        getInputValues.task_radio = button.value;
      }
    });

    return getInputValues;
  };

  const hideAndDisplayElement = (ele, arrayList) => {
    const array = document.querySelectorAll(arrayList);
    array.forEach((item) => {
      if (item.id === ele) {
        item.classList.add('clicked');
      } else {
        item.classList.remove('clicked');
      }
    });
  };

  const capString = (string) => string.replace(/^\w/, c => c.toUpperCase());

  const elementText = (ele) => document.getElementById(ele).innerText;

  return {
    getTaskValues,
    getEditedTaskValue,
    hideAndDisplayElement,
    capString,
    elementText,
  };
};

export default Logic;