/**
 * contains flags to configure the application
 *
 * NOTE: needs to be a .js file for DefinePlugin to populate the compile time values
 */

export class HardConfig{

    static isProd(){
        return process.env.NODE_ENV === 'production';
    }
    // the only point of this function is to avoid a casting in typescript consumer
    static getProps(){
        return HardConfig.props
    }
}


HardConfig.props={
    // CAPTCHA values are replaced at compile time by DefinePlugin
    env:process.env.NODE_ENV,
    timestamp: __TIMESTAMP__,
    allowServerConnection:true,
    autoOpenChooseOverride:true
}


console.log("HardConfig: props:",JSON.stringify(HardConfig.props,null,2))
