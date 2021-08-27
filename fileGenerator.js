
  (function generateMD(data){
    return '# ${data.title}
    ${badge}
    ${data.description}
    ## Table of Contents:
    * [installation] {#installation}
    * [usage] {#usage}
    * [license]{#license}
    ### installation:
    in order to install the dependicies, open the console and run:
    \'\'\'${data.installations}\'\'\'
    ### usage:
    ${data.usage}
    ### license:
    this project is licensed under:
    ${data.license}
    '
  
})