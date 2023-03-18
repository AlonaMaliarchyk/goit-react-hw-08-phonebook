const fields = {
  name: {
    icon: 'user',
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'User name',
  },
  email: {
    icon: 'envelope outline',
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'User email',
  },
  password: {
    icon: 'lock',
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'User password',
    minLength: 7,
  },
};

export default fields;