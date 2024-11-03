export const openLoginForm = () => {
    const width = 500
    const length = 600

    window.open('https://www.facebook.com/v20.0/dialog/oauth?client_id=1065139998519797&redirect_uri=http://localhost:3000/&state=tes&display=popup\n' +
        '    &response_type=code&scope=public_profile', '_blank')
}

export const token = () => {
    const width = 500
    const length = 600
    const code = 'AQBg7cI2IF0_MDpqJ6twQMZLnhhi3BuSoz3KV6oQGaqFSVrM2hHRahTpd0gl8yioWL9VjRwvi9ZMqPP-XnNuJzihmW0ZCqXUx5Pmqp1PdcPyaJ6edhTyKO6dg3979ibFNdq9LYqqSES1QISDfJMVBWP9CEX8MAjTs3Bb4-pJ4lOTWVehde08XiDS2oWuN7eK0NzFkI2HsBe4UFvO909Od5tYdMhM_C2K6xUAKSRubpHi4VT3budxTpoY4ZQzs1K-8ByvUnsVgYkOH4S15p52xWMT2V1cUrpRxU5ch4GYo4Gd6bNtNw4SwgJMXLnLFxWpBDQToQkghNmgosH6LaCoJqVdo5I87iu60kG5LUuHymx50TJCwNzSOu1kNNP1zW2M1sNU6cxFbX0YTjFeXFN4WYQbl-Ezasx4usROtPmgdJsKyw'
    window.open(`https://graph.facebook.com/v20.0/oauth/access_token?client_id=1065139998519797&redirect_uri=http://localhost:3000/&client_secret=a8b8c274c31b00e015680a7f5902ff4e&code=${code}`, '_blank')
}

export const getLogoImage = () => {
  return "/logo.png"
}