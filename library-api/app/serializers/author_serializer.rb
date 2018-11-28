class AuthorSerializer < ActiveModel::Serializer
  attributes  :id, :full_name, :email
  has_many :books
end
