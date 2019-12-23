Pod::Spec.new do |s|
  s.name          = "react-native-bio-id"
  s.version       = "4.0.4"
  s.source_files  = "ios/*.{h,m}"
  s.ios.deployment_target = '8.0'
  s.tvos.deployment_target = '9.0'
  s.authors       = { "Ilya Trikoz" => "jleed@me.com" }
  s.license       = "MIT"
  s.summary       = "React Native authentication with the native Touch ID & Face ID popup."
  s.homepage      = "https://github.com/jleed/react-native-bio-id"
  s.source        = { :git => "https://github.com/jleed/react-native-bio-id.git" }

  s.dependency 'React'
end
