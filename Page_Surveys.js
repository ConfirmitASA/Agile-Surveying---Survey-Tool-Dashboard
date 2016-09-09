class Page_Surveys {
  static private const PageId = "CodeLetters";
  
  static function Hide(context) {
    return false;
  }
  
  static function Render(context) {
  }
  
  static function SurveyCreationButton_Hide(context) {
    return false;
  }
  
  static function SurveyCreationButton_Render(context) {
    var buttons = new Buttons(context);
    var surveyButtonMarkup = buttons.CreateSurveyButton();
    context.Component.Output.Append(surveyButtonMarkup);
  }
  
  static function AllAgileSurveys_Hide(context) {
    return false;
  }
  
  static function AllAgileSurveys_Render(context) {
    
  }
}