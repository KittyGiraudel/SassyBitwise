require './lib/SassyBitwise'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyBitwise::VERSION
  s.date = SassyBitwise::DATE

  # Gem Details
  s.name = "SassyBitwise"
  s.rubyforge_project = "SassyBitwise"
  s.description = %q{Bitwise operators in Sass.}
  s.summary = %q{An implementation of bitwise operators in Sass without the use of Ruby.}
  s.authors = ["Hugo Giraudel"]
  s.email = ["hugo.giraudel@gmail.com"]
  s.homepage = "http://github.com/HugoGiraudel/SassyBitwise"

  # README file
  #s.files = ["readme.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Template Files
  # s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass",      [">=3.3.0"])
  s.add_dependency("compass",   [">= 0.12.1"])
end