const obtenerProspectos = `
select hr.idLocation,o.tipoAsesor ,o.nombreCompletos ,SUM(hr.numberLead) as 'numberLead', MAX(hr.created_at) as 'created_at'
from historicoReferencia hr
inner join operador o on hr.idOperador =o.id
where MONTH(hr.created_at)= :fromDateMonth and YEAR (hr.created_at) =:fromDateYear and o.tipoAsesor =  IFNULL(:tipoAsesor , o.tipoAsesor) and hr.idLocation = IFNULL(:location , hr.idLocation) and o.id  = IFNULL(:operador , o.id)
GROUP by hr.idLocation
`

const obtenerPackage = `
select r.id as reservation,r.salePrice as precio,c2.nombreCompletos as colaborador, c.nombreCompletos as cliente, r.fechaCreacion
from reservation r
inner join colaboradores c2 on r.idCollaborator = c2.id
inner join clientes c on r.idPerson = c.id
where r.idCollaborator = IFNULL(:idCollaborator,r.idCollaborator)
and  r.idPerson = IFNULL(:idPerson,r.idPerson)
`
const findPackages = `
select r.id as reservation,r.salePrice as precio,c2.nombreCompletos as colaborador, c.nombreCompletos as cliente, r.fechaCreacion
from reservation r
inner join colaboradores c2 on r.idCollaborator = c2.id
inner join clientes c on r.idPerson = c.id
where r.idCollaborator = IFNULL(:idCollaborator,r.idCollaborator)
and  r.idPerson = IFNULL(:idPerson,r.idPerson)
`

module.exports = {
  obtenerProspectos,
  obtenerPackage,
  findPackages
}
