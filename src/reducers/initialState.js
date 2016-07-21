export default {
    presentation: {
      nav: false
    },
    authentication: {
      authenticated: false,
      token: "",
      failed_attempt: false,
      message: "",
      errorSource: ""
    },
    admin: {
      users: [],
      events: []
    },
    vote: {
      poll: {
        options: []
      }
    }
};
