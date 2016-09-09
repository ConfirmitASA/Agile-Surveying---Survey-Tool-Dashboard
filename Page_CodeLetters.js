class Page_CodeLetters {
  static private const PageId = "CodeLetters";
  
  static function Hide(context) {
    return false;
  }
  
  static function Render(context) {
  }
  
  static function CodeLetterCreationButton_Hide(context) {
    return false;
  }
  
  static function CodeLetterCreationButton_Render(context) {
    var buttons = new Buttons(context);
    var codeLetterCreationButtonMarkup = buttons.CreateCodeLetterButton();
    context.Component.Output.Append(codeLetterCreationButtonMarkup);
  }
  
  static function GeneratedCodeLettersHitlist_Hide(context) {
    return false;
  }
  
  static function GeneratedCodeLettersHitlist_Render(context) {
    
  }
}