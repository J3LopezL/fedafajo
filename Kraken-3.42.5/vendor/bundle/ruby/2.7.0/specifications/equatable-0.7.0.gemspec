# -*- encoding: utf-8 -*-
# stub: equatable 0.7.0 ruby lib

Gem::Specification.new do |s|
  s.name = "equatable".freeze
  s.version = "0.7.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org", "bug_tracker_uri" => "https://github.com/piotrmurach/equatable/issues", "changelog_uri" => "https://github.com/piotrmurach/equatable/blob/master/CHANGELOG.md", "documentation_uri" => "https://www.rubydoc.info/github/piotrmurach/equatable", "homepage_uri" => "https://github.com/piotrmurach/equatable", "source_code_uri" => "https://github.com/piotrmurach/equatable" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Piotr Murach".freeze]
  s.date = "2021-04-05"
  s.description = "Provide equality comparison methods for objects based on their attributes by generating implementations for the ==, eql?, hash and inspect methods.".freeze
  s.email = ["piotr@piotrmurach.com".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "CHANGELOG.md".freeze, "LICENSE.txt".freeze]
  s.files = ["CHANGELOG.md".freeze, "LICENSE.txt".freeze, "README.md".freeze]
  s.homepage = "https://github.com/piotrmurach/equatable".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Provide equality comparison methods for objects based on their attributes.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 3.0"])
  else
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 3.0"])
  end
end
