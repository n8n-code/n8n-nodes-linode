import type { INodeProperties } from 'n8n-workflow';

export const domainsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					]
				}
			},
			"options": [
				{
					"name": "Get Domains",
					"value": "Get Domains",
					"action": "Domains List",
					"description": "This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains"
						}
					}
				},
				{
					"name": "Create Domain",
					"value": "Create Domain",
					"action": "Domain Create",
					"description": "Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains"
						}
					}
				},
				{
					"name": "Import Domain",
					"value": "Import Domain",
					"action": "Domain Import",
					"description": "Imports a domain zone from a remote nameserver.\nYour nameserver must allow zone transfers (AXFR) from the following IPs:\n\n  - 96.126.114.97\n  - 96.126.114.98\n  - 2600:3c00::5e\n  - 2600:3c00::5f\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/import"
						}
					}
				},
				{
					"name": "Delete Domain",
					"value": "Delete Domain",
					"action": "Domain Delete",
					"description": "Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domainId\"]}}"
						}
					}
				},
				{
					"name": "Get Domain",
					"value": "Get Domain",
					"action": "Domain View",
					"description": "This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domainId\"]}}"
						}
					}
				},
				{
					"name": "Update Domain",
					"value": "Update Domain",
					"action": "Domain Update",
					"description": "Update information about a Domain in Linode's DNS Manager.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/domains/{{$parameter[\"domainId\"]}}"
						}
					}
				},
				{
					"name": "Clone Domain",
					"value": "Clone Domain",
					"action": "Domain Clone",
					"description": "Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/clone"
						}
					}
				},
				{
					"name": "Get Domain Records",
					"value": "Get Domain Records",
					"action": "Domain Records List",
					"description": "Returns a paginated list of Records configured on a Domain in Linode's\nDNS Manager.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/records"
						}
					}
				},
				{
					"name": "Create Domain Record",
					"value": "Create Domain Record",
					"action": "Domain Record Create",
					"description": "Adds a new Domain Record to the zonefile this Domain represents.\n\nEach domain can have up to 12,000 active records.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/records"
						}
					}
				},
				{
					"name": "Delete Domain Record",
					"value": "Delete Domain Record",
					"action": "Domain Record Delete",
					"description": "Deletes a Record on this Domain.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/records/{{$parameter[\"recordId\"]}}"
						}
					}
				},
				{
					"name": "Get Domain Record",
					"value": "Get Domain Record",
					"action": "Domain Record View",
					"description": "View a single Record on this Domain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/records/{{$parameter[\"recordId\"]}}"
						}
					}
				},
				{
					"name": "Update Domain Record",
					"value": "Update Domain Record",
					"action": "Domain Record Update",
					"description": "Updates a single Record on this Domain.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/records/{{$parameter[\"recordId\"]}}"
						}
					}
				},
				{
					"name": "Get Domain Zone",
					"value": "Get Domain Zone",
					"action": "Domain Zone File View",
					"description": "Returns the zone file for the last rendered zone for the specified domain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domainId\"]}}/zone-file"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domains"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domains"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domains"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Axfr Ips",
			"name": "axfr_ips",
			"type": "json",
			"default": "[]",
			"description": "The list of IPs that may perform a zone transfer for this Domain. The total combined length of all data within this array cannot exceed 1000 characters.\n\n**Note**: This is potentially dangerous, and should be set to an empty list unless you intend to use it.\n",
			"routing": {
				"send": {
					"property": "axfr_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": null,
			"description": "A description for this Domain. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.org",
			"description": "The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Expire Sec",
			"name": "expire_sec",
			"type": "number",
			"default": 300,
			"description": "The amount of time in seconds that may pass before this Domain is no longer\nauthoritative.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 1209600.\n",
			"routing": {
				"send": {
					"property": "expire_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": null,
			"description": "The group this Domain belongs to.  This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 1234,
			"description": "This Domain's unique ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Master Ips",
			"name": "master_ips",
			"type": "json",
			"default": "[]",
			"description": "The IP addresses representing the master DNS for this Domain. At least one value is required for `type` slave Domains. The total combined length of all data within this array cannot exceed 1000 characters.\n",
			"routing": {
				"send": {
					"property": "master_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Refresh Sec",
			"name": "refresh_sec",
			"type": "number",
			"default": 300,
			"description": "The amount of time in seconds before this Domain should be refreshed.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n",
			"routing": {
				"send": {
					"property": "refresh_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Retry Sec",
			"name": "retry_sec",
			"type": "number",
			"default": 300,
			"description": "The interval, in seconds, at which a failed refresh should be retried.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n",
			"routing": {
				"send": {
					"property": "retry_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Soa Email",
			"name": "soa_email",
			"type": "string",
			"default": "admin@example.org",
			"description": "Start of Authority email address. This is required for `type` master Domains.\n",
			"routing": {
				"send": {
					"property": "soa_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Used to control whether this Domain is currently being rendered.\n",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Active",
					"value": "active"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Ttl Sec",
			"name": "ttl_sec",
			"type": "number",
			"default": 300,
			"description": "\"Time to Live\" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers.\n* Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n* Any other value is rounded up to the nearest valid value.\n* A value of 0 is equivalent to the default value of 86400.\n",
			"routing": {
				"send": {
					"property": "ttl_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "master",
			"description": "Whether this Domain represents the authoritative source of information for the domain it describes (\"master\"), or whether it is a read-only copy of a master (\"slave\").\n",
			"options": [
				{
					"name": "Master",
					"value": "master"
				},
				{
					"name": "Slave",
					"value": "slave"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/import",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Import Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.com",
			"description": "The domain to import.\n",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Import Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Remote Nameserver",
			"name": "remote_nameserver",
			"type": "string",
			"default": "examplenameserver.com",
			"description": "The remote nameserver that allows zone transfers (AXFR).\n",
			"routing": {
				"send": {
					"property": "remote_nameserver",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Import Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Import Domain"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain"
					]
				}
			}
		},
		{
			"displayName": "PUT /domains/{domainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Axfr Ips",
			"name": "axfr_ips",
			"type": "json",
			"default": "[]",
			"description": "The list of IPs that may perform a zone transfer for this Domain. The total combined length of all data within this array cannot exceed 1000 characters.\n\n**Note**: This is potentially dangerous, and should be set to an empty list unless you intend to use it.\n",
			"routing": {
				"send": {
					"property": "axfr_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": null,
			"description": "A description for this Domain. This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.org",
			"description": "The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Expire Sec",
			"name": "expire_sec",
			"type": "number",
			"default": 300,
			"description": "The amount of time in seconds that may pass before this Domain is no longer\nauthoritative.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 1209600.\n",
			"routing": {
				"send": {
					"property": "expire_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": null,
			"description": "The group this Domain belongs to.  This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 1234,
			"description": "This Domain's unique ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Master Ips",
			"name": "master_ips",
			"type": "json",
			"default": "[]",
			"description": "The IP addresses representing the master DNS for this Domain. At least one value is required for `type` slave Domains. The total combined length of all data within this array cannot exceed 1000 characters.\n",
			"routing": {
				"send": {
					"property": "master_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Refresh Sec",
			"name": "refresh_sec",
			"type": "number",
			"default": 300,
			"description": "The amount of time in seconds before this Domain should be refreshed.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n",
			"routing": {
				"send": {
					"property": "refresh_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Retry Sec",
			"name": "retry_sec",
			"type": "number",
			"default": 300,
			"description": "The interval, in seconds, at which a failed refresh should be retried.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n",
			"routing": {
				"send": {
					"property": "retry_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Soa Email",
			"name": "soa_email",
			"type": "string",
			"default": "admin@example.org",
			"description": "Start of Authority email address. This is required for `type` master Domains.\n",
			"routing": {
				"send": {
					"property": "soa_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Used to control whether this Domain is currently being rendered.\n",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Active",
					"value": "active"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Ttl Sec",
			"name": "ttl_sec",
			"type": "number",
			"default": 300,
			"description": "\"Time to Live\" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers.\n* Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n* Any other value is rounded up to the nearest valid value.\n* A value of 0 is equivalent to the default value of 86400.\n",
			"routing": {
				"send": {
					"property": "ttl_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "master",
			"description": "Whether this Domain represents the authoritative source of information for the domain it describes (\"master\"), or whether it is a read-only copy of a master (\"slave\").\n",
			"options": [
				{
					"name": "Master",
					"value": "master"
				},
				{
					"name": "Slave",
					"value": "slave"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domainId}/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Clone Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.org",
			"description": "The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Clone Domain"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Clone Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domainId}/records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Records"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Records"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Records"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Records"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domainId}/records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Domain Record was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123456,
			"description": "This Record's unique ID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "test",
			"description": "The name of this Record. For requests, this property's actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The hostname or FQDN of the Record.\n\n`NS`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (`*`) are not supported.\n\n`MX`: The mail subdomain. For example, `sub` for the address `user@sub.example.com` under the `example.com`\nDomain. Must be an empty string (`\"\"`) for a Null MX Record.\n\n`CNAME`: The hostname. Must be unique. Required.\n\n`TXT`: The hostname.\n\n`SRV`: Unused. Use the `service` property to set the service name for this record.\n\n`CAA`: The subdomain. Omit or enter an empty string (`\"\"`) to apply to the entire Domain.\n\n`PTR`: See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 80,
			"description": "The port this Record points to. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 50,
			"description": "The priority of the target host for this Record. Lower values are preferred. Only valid for\nMX and SRV record requests. Required for SRV record requests.\n\nDefaults to `0` for MX record requests. Must be `0` for Null MX records.\n",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "string",
			"default": null,
			"description": "The protocol this Record's service communicates with. An underscore (`_`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Service",
			"name": "service",
			"type": "string",
			"default": null,
			"description": "The name of the service. An underscore (`_`) is prepended and a period (`.`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"type": "options",
			"default": "issue",
			"description": "The tag portion of a CAA record. Only valid and required for CAA record requests.\n",
			"options": [
				{
					"name": "Issue",
					"value": "issue"
				},
				{
					"name": "Issuewild",
					"value": "issuewild"
				},
				{
					"name": "Iodef",
					"value": "iodef"
				}
			],
			"routing": {
				"send": {
					"property": "tag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "192.0.2.0",
			"description": "The target for this Record. For requests, this property's actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The IP address. Use `[remote_addr]` to submit the IPv4 address of the request. Required.\n\n`NS`: The name server. Must be a valid domain. Required.\n\n`MX`: The mail server. Must be a valid domain unless creating a Null MX Record. To create a\n[Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first\n[remove](/docs/api/domains/#domain-record-delete) any additional MX records, create an MX record with empty strings\n(`\"\"`) for the `target` and `name`. If a Domain has a Null MX record, new MX records cannot be created. Required.\n\n`CNAME`: The alias. Must be a valid domain. Required.\n\n`TXT`: The value. Required.\n\n`SRV`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.\nTo configure for a different domain, enter a valid FQDN. For example, the value `www` with a Domain for\n`example.com` results in a target set to `www.example.com`, whereas the value `sample.com` results in a\ntarget set to `sample.com`. Required.\n\n`CAA`: The value. For `issue` or `issuewild` tags, the domain of your certificate issuer. For the `iodef`\ntag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:\n  * `issue`: The domain of your certificate issuer. Must be a valid domain.\n  * `issuewild`: Must begin with `*`.\n  * `iodef`: Must be either (1) a valid domain, (2) a valid domain prepended with `http://` or `https://`, or (3) a valid email address prepended with `mailto:`.\n\n`PTR`: Required. See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n\nWith the exception of A, AAAA, and CAA records, this field accepts a trailing period.\n",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Ttl Sec",
			"name": "ttl_sec",
			"type": "number",
			"default": 604800,
			"description": "\"Time to Live\" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.\n",
			"routing": {
				"send": {
					"property": "ttl_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "A",
			"description": "The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address. For more information, see the guides on [DNS Record Types](/docs/products/networking/dns-manager/guides/#dns-record-types).\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "TXT",
					"value": "TXT"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "CAA",
					"value": "CAA"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Domain Record was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 50,
			"description": "The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Create Domain Record"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domainId}/records/{recordId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Delete Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Delete Domain Record"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domainId}/records/{recordId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Record"
					]
				}
			}
		},
		{
			"displayName": "PUT /domains/{domainId}/records/{recordId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "test",
			"description": "The name of this Record. For requests, this property's actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The hostname or FQDN of the Record.\n\n`NS`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (`*`) are not supported.\n\n`MX`: The mail subdomain. For example, `sub` for the address `user@sub.example.com` under the `example.com`\nDomain. Must be an empty string (`\"\"`) for a Null MX Record.\n\n`CNAME`: The hostname. Must be unique. Required.\n\n`TXT`: The hostname.\n\n`SRV`: Unused. Use the `service` property to set the service name for this record.\n\n`CAA`: The subdomain. Omit or enter an empty string (`\"\"`) to apply to the entire Domain.\n\n`PTR`: See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 80,
			"description": "The port this Record points to. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 50,
			"description": "The priority of the target host for this Record. Lower values are preferred. Only valid for\nMX and SRV record requests. Required for SRV record requests.\n\nDefaults to `0` for MX record requests. Must be `0` for Null MX records.\n",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "string",
			"default": null,
			"description": "The protocol this Record's service communicates with. An underscore (`_`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Service",
			"name": "service",
			"type": "string",
			"default": null,
			"description": "The name of the service. An underscore (`_`) is prepended and a period (`.`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"type": "options",
			"default": "issue",
			"description": "The tag portion of a CAA record. Only valid and required for CAA record requests.\n",
			"options": [
				{
					"name": "Issue",
					"value": "issue"
				},
				{
					"name": "Issuewild",
					"value": "issuewild"
				},
				{
					"name": "Iodef",
					"value": "iodef"
				}
			],
			"routing": {
				"send": {
					"property": "tag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "192.0.2.0",
			"description": "The target for this Record. For requests, this property's actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The IP address. Use `[remote_addr]` to submit the IPv4 address of the request. Required.\n\n`NS`: The name server. Must be a valid domain. Required.\n\n`MX`: The mail server. Must be a valid domain unless creating a Null MX Record. To create a\n[Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first\n[remove](/docs/api/domains/#domain-record-delete) any additional MX records, create an MX record with empty strings\n(`\"\"`) for the `target` and `name`. If a Domain has a Null MX record, new MX records cannot be created. Required.\n\n`CNAME`: The alias. Must be a valid domain. Required.\n\n`TXT`: The value. Required.\n\n`SRV`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.\nTo configure for a different domain, enter a valid FQDN. For example, the value `www` with a Domain for\n`example.com` results in a target set to `www.example.com`, whereas the value `sample.com` results in a\ntarget set to `sample.com`. Required.\n\n`CAA`: The value. For `issue` or `issuewild` tags, the domain of your certificate issuer. For the `iodef`\ntag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:\n  * `issue`: The domain of your certificate issuer. Must be a valid domain.\n  * `issuewild`: Must begin with `*`.\n  * `iodef`: Must be either (1) a valid domain, (2) a valid domain prepended with `http://` or `https://`, or (3) a valid email address prepended with `mailto:`.\n\n`PTR`: Required. See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n\nWith the exception of A, AAAA, and CAA records, this field accepts a trailing period.\n",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Ttl Sec",
			"name": "ttl_sec",
			"type": "number",
			"default": 604800,
			"description": "\"Time to Live\" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.\n",
			"routing": {
				"send": {
					"property": "ttl_sec",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 50,
			"description": "The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.\n",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Update Domain Record"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domainId}/zone-file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domains"
					],
					"operation": [
						"Get Domain Zone"
					]
				}
			}
		},
];
