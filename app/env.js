// REVIEW all of these variables need to be filled out for auth to work!

export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''
export const useSockets = false
export const domain = 'codeworksclassroom.auth0.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
export const audience = 'https://codeworksclassroom.com'

// domain: codeworksclassroom.auth0.com
// audience: https://codeworksclassroom.com
// clientId: pOXw2OGv1LsYi7LEBmDF04RLkXQvldml