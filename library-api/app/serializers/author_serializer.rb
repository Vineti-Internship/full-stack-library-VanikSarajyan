class AuthorSerializer < ActiveModel::Serializer
  attributes :full_name, :email
  has_many :books
end
