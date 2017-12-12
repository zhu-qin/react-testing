function mapDispatchToActions(dispatch) {
  function createSetterAction(actionType) {
      return function action(key, value) {
        if (typeof key != 'string' || key.includes(' ')) {
          throw 'first argument must be a string with no spaces for state key, second argument must be a state value'
        } else if (typeof value === 'undefined') {
          throw 'second argument must be a state value'
        }
        dispatch({
          type: actionType,
          resource: key,
          payload: value
        })
    }
  }

  function setCurrentDocument(doc) {
    if (doc['entity-type'] !== 'document' || !doc['uid']) {
      throw 'argument must be a nuxeo document with uid'
    }
    createSetterAction('SET_DOCUMENTS')('current', doc)
  }

  function setCurrentUser(user) {
    if (user['entity-type'] !== 'user' || !user.id) {
      throw 'argument must be a user object with id'
    }
    createSetterAction('SET_USERS')('current', user)
  }

  return {
    setUsers: createSetterAction('SET_USERS'),
    setDocuments: createSetterAction('SET_DOCUMENTS'),
    setSettings: createSetterAction('SET_SETTINGS'),
    setMessages: createSetterAction('SET_MESSAGES'),
    setStudio: createSetterAction('SET_STUDIO'),
    setCurrentDocument: setCurrentDocument,
    setCurrentUser: setCurrentUser
  }
}

export default mapDispatchToActions
