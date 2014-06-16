base_directory = File.expand_path(File.join(File.dirname(__FILE__), '..'))
SassyBitwise_stylesheets_path = File.join(base_directory, 'stylesheets')

if (defined? Compass)
  Compass::Frameworks.register('SassyBitwise', :stylesheets_directory => SassyBitwise_stylesheets_path)
else
  # compass not found, register on the Sass path via the environment.
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + SassyBitwise_stylesheets_path
  else
    ENV["SASS_PATH"] = SassyBitwise_stylesheets_path
  end
end

#  Version is a number. If a version contains alphas, it will be created as a prerelease version
#  Date is in the form of YYYY-MM-DD
module SassyBitwise
  VERSION = "1.1.2"
  DATE = "2014-06-16"
end
