class ReportMaster {
  static function CustomerClientStyleSetting_Hide(context) {
    return false;
  }
  
  static function CustomerClientStyleSetting_Render(context) {
    var customStyle = "<link rel='stylesheet' type='text/css' href='" + Config.CustomStyles + "'>";
    context.Component.Output.Append(customStyle);
  }
  
  static function CustomerLogo_Hide(context) {
    return false;
  }
  
  static function CustomerLogo_Render(context) {
    var logo = "<img src='" + Config.CustomerLogoUrl + "' alt='" + Config.ReportName + "' />";
    context.Component.Output.Append(logo);
  }
  
  static function ReportName_Hide(context) {
    return false;
  }
  
  static function ReportName_Render(context) {
    var clientName = "<h2>" + Config.ReportName + "</h2>";
    context.Component.Output.Append(clientName);
  }
}