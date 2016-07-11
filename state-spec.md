presentation:
  nav: boolean - open or closed

authentication:
  authenticated: boolean
  token: json web token
  failed_attempt: boolean
admin:
  users: [
    user:{
      email/name: String
      phone_number: String
    }
  ]
  events: [
    event: {
      eventTime: time
      eventName: String
      users: [
        user:{
          email/name: String
          phone_number: String
        }
      ]
      polls: [
        poll: {
          name: String
          options: {
            {
              name: String,
              votes: Integer
            }

          }

        }
      ]
    }
  ]





pollId:577745165018947a6bff0109
vote: 577745165018947a6bff010b
