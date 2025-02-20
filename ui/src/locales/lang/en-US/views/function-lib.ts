export default {
  title: 'Function',
  createFunction: 'Create Function',
  editFunction: 'Edit Function',
  copyFunction: 'Copy Function',
  searchBar: {
    placeholder: 'Search by function name'
  },
  setting: {
    disabled: 'Disabled'
  },
  tip: {
    saveMessage: 'Unsaved changes will be lost. Are you sure you want to exit?'
  },
  delete: {
    confirmTitle: 'Confirm deletion of function:',
    confirmMessage:
      'Deleting this function will cause errors in APP that reference it when they are queried. Please proceed with caution.'
  },
  disabled: {
    confirmTitle: 'Confirm disable function:',
    confirmMessage:
      'Disabling this function will cause errors in APP that reference it when they are queried. Please proceed with caution.'
  },
  functionForm: {
    title: {
      copy: 'Copy',
      baseInfo: 'Basic Information'
    },
    form: {
      functionName: {
        label: 'Name',
        placeholder: 'Please enter the function name',
        requiredMessage: 'Please enter the function name'
      },
      functionDescription: {
        label: 'Description',
        placeholder: 'Please enter a description of the function'
      },
      permission_type: {
        label: 'Permissions',
        requiredMessage: 'Please select'
      },
      inputParam: {
        label: 'Input Parameters',
        placeholder: 'Please enter parameter values',
        requiredMessage: 'Please enter parameter values'
      },
      paramName: {
        label: 'Parameter Name',
        placeholder: 'Please enter the parameter name',
        requiredMessage: 'Please enter the parameter name'
      },
      dataType: {
        label: 'Data Type'
      },
      source: {
        label: 'Source',
        custom: 'Custom',
        reference: 'Reference Parameter'
      },
      required: {
        label: 'Required'
      },
      param: {
        outputParam: 'Output Parameters',
        paramInfo1: 'Displayed when using the function',
        paramInfo2: 'Not displayed when using the function',
        code: 'Content (Python)'
      },
      debug: {
        run: 'Run',
        output: 'Output',
        runResult: 'Run Result',
        runSuccess: 'Successful',
        runFailed: 'Run Failed'
      }
    }
  }
}
