class Buttons {
  private var _context;
  private const AgileSurveyIdParameterName = "agileSurveyId";
  
  function Buttons(context) {
    _context = context;  
  }
  
  function CreateCodeLetterButton() {
    if(_context.State.Parameters.IsNull(AgileSurveyIdParameterName)) {
      throw new Exception("AgileSurveyId cannot be null");
    }
    var agileSurveyId = _context.State.Parameters.GetString(AgileSurveyIdParameterName);

    var codeLetterPackageSurveyUrl = Config.CodeLetterPackageSurveyUrl;
    var userDetails = Config.GetUserDetails(_context.User);
    var url = codeLetterPackageSurveyUrl + "?s=" + agileSurveyId + "&udet="+ Security.EncryptUserDetails(userDetails, Config.EncryptionKey);

    return "<a href='" + url + "' target='_blank' class='btn btn-lg btn-success pull-right' style='color: #ffffff;' role='button'>Create new code letter package</a>";
  }
  
  function CreateSurveyButton() {
    var linkedSurveyUrl = Config.LinkedSurveyUrl;
    var linkedSurveyLanguage = Config.LinkedSurveyLanguage;
    var userDetails = Config.GetUserDetails(_context.User);
    var url = linkedSurveyUrl + "?l=" + linkedSurveyLanguage + "&udet="+ Security.EncryptUserDetails(userDetails, Config.EncryptionKey);
    return "<a href='" + url + "' target='_blank' class='btn btn-lg btn-success pull-right' style='color: #ffffff;' role='button'>Create a new survey</a>";
  }
}