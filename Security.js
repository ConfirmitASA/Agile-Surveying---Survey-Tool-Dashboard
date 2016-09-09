class Security {
  public static function EncryptUserDetails(userDetails, key) {	
    var data = Encoding.UTF8.GetBytes(userDetails);
	var memoryStream = new System.IO.MemoryStream();
	var managedRijndael = new System.Security.Cryptography.RijndaelManaged();
    
    managedRijndael.Key = Convert.FromBase64String(key);
    managedRijndael.Padding = System.Security.Cryptography.PaddingMode.PKCS7;
    managedRijndael.Mode = System.Security.Cryptography.CipherMode.ECB;

	var cryptoStream = new System.Security.Cryptography.CryptoStream(memoryStream, managedRijndael.CreateEncryptor(), System.Security.Cryptography.CryptoStreamMode.Write);

	cryptoStream.Write(data, 0, data.Length);
	cryptoStream.Close();
	var encryptedData = memoryStream.ToArray();
	return Convert.ToBase64String(encryptedData);
  }
}