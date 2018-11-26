class BookSerializer < ActiveModel::Serializer
  attributes :title, :description, :price
  has_one :author
end
