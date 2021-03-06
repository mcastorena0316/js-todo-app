import Task from './task';

const Logic = () => {
  // eslint-disable-next-line consistent-return
  const createNewTask = () => {
    const tName = document.querySelectorAll('#task_name')[0].value;
    const tDescription = document.querySelectorAll('#task_description')[0].value;
    const tDate = document.querySelectorAll('#task_date')[0].value;
    const tID = document.getElementById('add-task-button').className.split(' ')[2];
    const completedTask = false;
    let checkedButton = '';

    const formButtons = document.getElementsByName('priorityRadios');
    formButtons.forEach((button) => {
      if (button.checked) {
        checkedButton = button.value;
      }
    });

    if (tDate !== '' && tDescription !== '' && tName !== '' && checkedButton !== '') {
      const project = Task(tName, tDate, tDescription, checkedButton, tID, completedTask);

      return project;
    }
  };

  const getEditedTaskValue = (inputs, radioButtons) => {
    const formInputs = document.querySelectorAll(inputs);
    const formButtons = document.getElementsByName(radioButtons);
    const getInputValues = {};
    let empty = false;
    formInputs.forEach((input) => {
      if (input.value === '') {
        empty = true;
      } else {
        getInputValues[input.getAttribute('data-id')] = input.value;
      }
    });

    formButtons.forEach((button) => {
      if (button.checked) {
        getInputValues.task_radio = button.value;
      }
    });

    if (empty) {
      return 'is-empty';
    }

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
    createNewTask,
    getEditedTaskValue,
    hideAndDisplayElement,
    capString,
    elementText,
  };
};

export default Logic;